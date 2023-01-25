import styles from './additional.module.scss';

/* eslint-disable-next-line */
export interface AdditionalProps {}

export function Additional(props: AdditionalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Additional!</h1>
    </div>
  );
}

export default Additional;
