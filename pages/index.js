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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Next Courses</title>
      <div className={styles.container}></div>;
    </>
  );
}
