import { Facebook, Instagram, Globe } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    icon: <Facebook className="w-5 h-5" />,
    title: "Facebook",
    href: "https://www.facebook.com/dmkcosmeticos",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    title: "Instagram",
    href: "https://www.instagram.com/dmkcosmeticos/",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "OLX",
    href: "https://www.olx.com.br/",
  },
];

const SocialMedia = ({className,iconClassName,tooltipClassName}: Props) => {
  return (
    <TooltipProvider>
      <view className={cn("flex items-center gap-4", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                className={cn(
                  "p-2 border border-pink-950 rounded-full hover:text-pink-950 hover:border-white",
                  iconClassName
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(tooltipClassName)}
              side="top"
              align="center"
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </view>
    </TooltipProvider>
  );
}

export default SocialMedia