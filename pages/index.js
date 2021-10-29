import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/courses");
  }, []);
  return <div className={styles.container}></div>;
}
