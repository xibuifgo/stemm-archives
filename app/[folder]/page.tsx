import Home from "../page";

type FolderPageProps = {
  params: Promise<{ folder: string }>;
};

export default async function FolderPage({ params }: FolderPageProps) {
  const { folder } = await params;
  return <Home folderName={folder} />;
}
