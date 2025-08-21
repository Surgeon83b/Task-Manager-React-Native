import { Status } from '@/types';
import { Colors } from './ui';

export const textStyles = {
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '300',
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
};

export const labelColors = {
  [Status.CANCELLED]: Colors.PLACEHOLDER,
  [Status.COMPLETED]: Colors.SUCCESS,
  [Status.INPROGRESS]: Colors.ITEM_TITLE,
};
