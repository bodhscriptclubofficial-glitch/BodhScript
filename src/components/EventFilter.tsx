interface EventFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'hackathon', label: 'Hackathons' },
  { id: 'meetup', label: 'Meetups' },
  { id: 'competition', label: 'Competitions' }
];

export function EventFilter({ selectedCategory, onCategoryChange }: EventFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-5 py-2.5 rounded-lg transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
