import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  rate?: number
  onCancelRating?: (starsCount: number) => void
  onAcceptRating?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAcceptRating,
    feedbackTitle,
    hasFeedback,
    onCancelRating,
    title,
    rate = 0,
  } = props
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)
      if (hasFeedback) {
        setIsModalOpen(true)
      } else {
        onAcceptRating?.(selectedStarsCount)
      }
    },
    [hasFeedback, onAcceptRating]
  )

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAcceptRating?.(starsCount, feedback)
  }, [feedback, onAcceptRating, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancelRating?.(starsCount)
  }, [onCancelRating, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your feedback')}
        data-testid="RatingCard.Input"
      />
    </>
  )

  return (
    <Card className={className} max data-testid='RatingCard'>
      <VStack align="center" gap="8">
        <Text title={starsCount ? t('Thanks for your feedback') : title} />
        <StarRating size={40} onSelect={onSelectStars} selectedStars={rate} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                onClick={cancelHandle}
                theme={ButtonTheme.OUTLINE_RED}
                data-testid="RatingCard.Close"
              >
                {t('Cancel')}
              </Button>
              <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandle} size={ButtonSize.L} data-testid="RatingCard.Send">
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})
