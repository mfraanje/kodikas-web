import { Container, Text } from '@mantine/core';
import styles from './Components.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container size={'lg'} className={styles.footerText}>
        <Text c='dimmed' size='xs'>
          © 2024 Qodi lab <br />
          info@qodilab.com
          <br />
          KVK-nummer: 93578776 <br />
          Btw-identificatienummer: NL005029056B30
        </Text>
      </Container>
    </div>
  );
}
