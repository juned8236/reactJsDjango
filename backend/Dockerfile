FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY . /code/
VOLUME /code
ADD . /code
RUN pip install -r requirements.txt
CMD ["sh", "entry.sh"]
