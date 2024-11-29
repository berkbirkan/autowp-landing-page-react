import React from 'react';
import { Image, Clock } from 'lucide-react';

export function ThumbnailIcon() {
  return (
    <Image className="w-8 h-8 text-[#00749c]" />
  );
}

export function AutomationIcon() {
  return (
    <Clock className="w-8 h-8 text-[#00749c]" />
  );
}