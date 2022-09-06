import { useTranslation } from 'react-i18next';

export const errorMessages = ( key: string ) => {
    const { t } = useTranslation();

    const message = {
        'required_field': t('required_field'),
        'enter_mail': t('enter_mail'),
        'max_characters_20': t('max_characters_20'),
        'between_4_and_64_characters': t('between_4_and_64_characters'),
        'passwords_not_match': t('passwords_not_match'),
        'number_not_exist': t('number_not_exist'),
        'terms_agreement': t('terms_agreement'),
        'number_login_attempts_exceeded': t('number_login_attempts_exceeded'),
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return message[key];
};