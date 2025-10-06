import PropTypes from 'prop-types';
import { APP_NAME } from 'src/config';

export const Seo = (props) => {
    const { title } = props;

    const fullTitle = title
        ? `${title} | ${APP_NAME}`
        : APP_NAME;

    return (
        <title>
            {fullTitle}
        </title>
    );
};

Seo.propTypes = {
    title: PropTypes.string
};
