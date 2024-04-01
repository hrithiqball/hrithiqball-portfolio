import CreatePost from './create-post';

export default async function page() {
  return (
    <div className="m-4 rounded-sm p-4 dark:bg-slate-900">
      <CreatePost />
    </div>
  );
}
