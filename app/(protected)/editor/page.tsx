import CreatePost from './create-post';

export default async function page() {
  return (
    <div className="mx-4 mt-20 rounded-sm p-4 dark:bg-slate-900">
      <CreatePost />
    </div>
  );
}
