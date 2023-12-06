import React from 'react';
import { SuccessIcon } from './SuccessIcon';
import { ScanIcon } from './ScanIcon';
import { NotificationIcon } from './NotificationIcon';
import { GiftCardIcon } from './GiftCardIcon';
import {  ArrowLeftIcon } from './ArrowLeftIcon';
import { CreditCardIcon } from './CreditCardIcon';
import { BillIcon } from './BillIcon';
import { NotesIcon } from './NotesIcon';
import { ClockIcon } from './ClockIcon';
import { Pressable } from 'react-native';
import { ArrowLeftLineIcon } from './ArrowLeftLineIcon';
import { ArrowDownIcon } from './ArrowDownIcon';

export type SquaremeIconName = 'success' | 'scan' | 'notification' | 'gift-card' | 'arrow-left' | 'arrow-left-line' | 'arrow-down' | 'credit-card' | 'bill' | 'notes' | 'clock'; // We can add more icon names as needed

interface SquaremeIconProps {
  name: SquaremeIconName;
  size?: number;
  color?: string;
}

export const SquaremeIcon: React.FC<SquaremeIconProps> = ({ name, size, color, ...props }) => {
  let iconPath;

  switch (name) {
    case 'success':
      iconPath = (
        <SuccessIcon color={color} size={size} />
      );
      break;
    case 'scan':
      iconPath = (
        <ScanIcon color={color} size={size} />
      );
      break;

    case 'notification':
      iconPath = (
        <NotificationIcon color={color} size={size} />
      );
      break;
    case 'gift-card':
      iconPath = (
        <GiftCardIcon color={color} size={size} />
      );
      break;

    case 'arrow-left':
      iconPath = (
        <ArrowLeftIcon color={color} size={size} />
      );
      break;

      case 'arrow-left-line':
        iconPath = (
          <ArrowLeftLineIcon color={color} size={size} />
        );
        break;

        case 'arrow-down':
        iconPath = (
          <ArrowDownIcon color={color} size={size} />
        );
        break;

     

    case 'credit-card':
      iconPath = (
        <CreditCardIcon color={color} size={size} />
      );
      break;

    case 'bill':
      iconPath = (
        <BillIcon color={color} size={size} />
      );
      break;

    case 'notes':
      iconPath = (
        <NotesIcon color={color} size={size} />
      );
      break;

    case 'clock':
      iconPath = (
        <ClockIcon color={color} size={size} />
      );
      break;
      

    // We can add more cases for other icons as needed
    default:
      console.warn(`Icon '${name}' not recognized as SquaremeIcon`);
      return null;
  }

  return (
    <Pressable {...props}>
      {iconPath}
    </Pressable>
  );
};

