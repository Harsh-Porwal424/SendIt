import React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({
    response,
}) => {
  // Construct the full URL with '/f' added correctly
  const fullUrl = response?.shortUrl 
    ? `${response.shortUrl.replace(/(http:\/\/[^\/]+\/)/, '$1f/')}` 
    : '';

  return (
    <Html>
      <Head />
      <Preview>{response?.emailToSend?.split("@")[0]} shared a file with you</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Heading style={header}>Hi {response?.emailToSend?.split("@")[0]},</Heading>
            <Heading as="h2" style={subHeader}>
              Someone shared a file with you
            </Heading>
            <Section style={fileInfo}>
              <Text style={label}>File Name:</Text>
              <Text style={value}>{response?.fileName}</Text>
              <Text style={label}>File Size:</Text>
              <Text style={value}>{response?.fileSize}</Text>
              <Text style={label}>File Type:</Text>
              <Text style={value}>{response?.fileType}</Text>
            </Section>
            <Text style={disclaimer}>
              *Access and Download file at your own risk
            </Text>
            <Text style={paragraph}>
              Now You can also share files with SendIt FileSharo App
            </Text>
            <Text style={paragraph}>
              Click the Button Below to Access your file
            </Text>
            <Section style={buttonContainer}>
              <Button style={button} href={fullUrl}>Click here to Download</Button>
            </Section>
          </Section>
          <Text style={footer}>
            © 2024 | SendIt FileSharo App. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: "'Arial', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "100%",
  maxWidth: "600px",
};

const content = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px",
  borderRadius: "5px",
};

const header = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#333333",
  margin: "0 0 20px",
};

const subHeader = {
  fontSize: "20px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#333333",
  margin: "0 0 30px",
};

const fileInfo = {
  margin: "0 0 30px",
};

const label = {
  fontSize: "16px",
  lineHeight: "1.4",
  fontWeight: "700",
  color: "#333333",
  margin: "0",
};

const value = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#333333",
  margin: "0 0 15px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#333333",
  margin: "0 0 15px",
};

const disclaimer = {
  fontSize: "14px",
  color: "#999999",
  margin: "0 0 20px",
};

const buttonContainer = {
  textAlign: "center",
  margin: "30px 0 0",
};

const button = {
  backgroundColor: "#ff4d4d",
  borderRadius: "4px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 30px",
  border: "none",
};

const footer = {
  color: "#999999",
  fontSize: "12px",
  margin: "20px 0 0",
  textAlign: "center",
};