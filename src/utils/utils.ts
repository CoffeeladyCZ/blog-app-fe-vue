export const createParams = (
  url: string,
  articleId: string,
  version: string,
  uniqueId: string,
  event: string | null
) => {
  const params = new URLSearchParams();
  params.append('url', url);
  params.append('article_id', articleId ?? '');
  params.append('version', version ?? '');
  params.append('unique_id', uniqueId ?? '');
  params.append('event', event ?? '');
  return params;
}
