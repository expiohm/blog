import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components"

interface ThankYouEmailProps {
  name: string
}

export default function ThankYouEmail({ name }: ThankYouEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Luxury Interior Design</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Contacting Us</Heading>
          <Text style={text}>
            Dear {name},
          </Text>
          <Text style={text}>
            Thank you for reaching out to Luxury Interior Design. We have received your message and will get back to you as soon as possible.
          </Text>
          <Text style={text}>
            In the meantime, feel free to explore our portfolio and services on our website.
          </Text>
          <Text style={text}>
            Best regards,
            <br />
            The Luxury Interior Design Team
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f9f8f6",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
}

const h1 = {
  color: "#d6ad60",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
}

const text = {
  color: "#4e4e4e",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
} 