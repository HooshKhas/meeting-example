import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
    const navigate = useNavigate();

    return useMemo(() => {
        return {
            back: () => navigate(-1),
            forward: () => navigate(1),
            refresh: () => navigate(0),
            push: (href, options) => navigate(href),
            replace: (href, options) => navigate(href, { replace: true, ...options || {} }),
            prefetch: (href) => { }
        };
    }, [navigate]);
};
