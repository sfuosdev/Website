export const getBasePath = () => {
    return import.meta.env.MODE === 'production' ? '' : '';
};