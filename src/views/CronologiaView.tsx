import React from 'react';
import { TimelineSection } from '../components/TimelineSection';
import { History, Calendar, CheckCircle2 } from 'lucide-react';

export const CronologiaView: React.FC = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <TimelineSection />
    </div>
  );
};
