echo Starting Django-React  with Gunicorn!
exec gunicorn backend.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 3