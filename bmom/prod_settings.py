from .settings import *

DEBUG = False

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '/js/bundles/',
        'STATS_FILE': BASE_DIR + '/static/webpack-stats-prod.json',
    }
}
