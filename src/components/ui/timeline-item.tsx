import { ReactNode } from "react";

interface TimelineItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

const TimelineItem = ({ icon, title, description, index, isLast }: TimelineItemProps) => {
  return (
    <div className="relative flex items-start space-x-6">
      {/* Icon Container */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;