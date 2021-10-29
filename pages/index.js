import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/courses");
  }, []);
  return (
    <>
    <title>Next Courses</title>
      <div className={styles.container}></div>;
    </>
  );
}
