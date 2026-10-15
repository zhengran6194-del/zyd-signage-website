type JsonLdProps = {
  data: Record<string, unknown>;
};

const authorId = 'https://www.zydsign.com/#aaron';

function normalizeArticleAuthors(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(normalizeArticleAuthors);
  if (!value || typeof value !== 'object') return value;

  const node = value as Record<string, unknown>;
  const normalized = Object.fromEntries(
    Object.entries(node).map(([key, child]) => [key, normalizeArticleAuthors(child)]),
  );
  const types = Array.isArray(normalized['@type']) ? normalized['@type'] : [normalized['@type']];
  if (types.includes('Article')) normalized.author = { '@id': authorId };
  return normalized;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalizeArticleAuthors(data)) }}
    />
  );
}
