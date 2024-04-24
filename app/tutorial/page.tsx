import InProgress from '@/components/in-progress';

export default async function page() {
  return (
    <div className="flex flex-1 flex-col">
      <InProgress />
    </div>
  );
}
