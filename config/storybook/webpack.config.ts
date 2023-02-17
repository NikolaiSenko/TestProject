import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  if(config.module) {
      // eslint-disable-next-line
    config.module.rules = config.module.rules?.map((rule: any) => {
      console.log(rule)
      if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i }
      }
  
      return rule as RuleSetRule
  })
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module?.rules?.push(buildCssLoader(true))

  return config
}