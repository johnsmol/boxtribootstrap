ARG flask_env

FROM python:3.8-alpine AS base

WORKDIR /app/flask
COPY requirements.txt /app/flask
RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev \
    && apk add libffi-dev
RUN pip install -r requirements.txt && rm requirements.txt

FROM base AS development
ENV FLASK_APP main
ENV FLASK_ENV development
CMD flask run -h 0.0.0 -p 5000

FROM ${flask_env} AS final
RUN echo Using $FLASK_ENV