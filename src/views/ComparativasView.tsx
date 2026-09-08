import React from 'react';
import { ComparisonsSection } from '../components/ComparisonsSection';
import { Columns, ArrowLeftRight } from 'lucide-react';

export const ComparativasView: React.FC = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <ComparisonsSection />
    </div>
  );
};
