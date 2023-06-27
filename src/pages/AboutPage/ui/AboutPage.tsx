import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const {t} = useTranslation('about');

  return (
    <div>
      {t('О сайте')}
      {t('О сайте1212121')}
    </div>
  );
}

export default AboutPage