import { Header } from "./header";
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
