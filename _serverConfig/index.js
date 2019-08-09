const express = require('express');
const sanitize = require('sanitize');
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'productService',
  brokers: ['kafka:9092']
});

const kafkaInit = (req, res, next) => {
  req.producer = kafka.producer();
  req.consumer = kafka.consumer({ groupId: 'productService-group' });

  next();
};

module.exports = server => {
  server.use(sanitize.middleware);
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(kafkaInit);
};
