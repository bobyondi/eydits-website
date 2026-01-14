import { Expert } from '@/types';
import { experts } from '@/data/experts';
import ExpertCard from './ExpertCard';
import { useAppContext } from '@/context/AppContext';

interface ExpertSelectorProps {
  serviceId: string;
}

const ExpertSelector = ({ serviceId }: ExpertSelectorProps) => {
  const { selectedExpert, setSelectedExpert } = useAppContext();

  const filteredExperts = experts.filter((expert) =>
    expert.specializations.includes(serviceId)
  );

  if (filteredExperts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-primary-600">No experts available for this service yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold mb-2">Select Your Expert</h2>
        <p className="text-primary-600">
          Choose from our vetted professionals. Expert selection does not affect pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExperts.map((expert) => (
          <ExpertCard
            key={expert.id}
            expert={expert}
            isSelected={selectedExpert?.id === expert.id}
            onSelect={setSelectedExpert}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertSelector;
