import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  const { t } = useTranslation();
  return <div className="p-2">{t('hello')}</div>;
}
