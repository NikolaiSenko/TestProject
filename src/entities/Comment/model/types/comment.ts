import { User } from '@/entities/User'

export interface CommentInterface {
  id: string;
  user: User;
  text: string;
}