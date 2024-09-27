/* ------------- External ------------ */
import { List } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

/* ------------- Styles ------------ */
import styles from './ListLink.module.css';

interface Props {
  href: string;
  text: string;
}

export const ListLink: FC<Props> = ({ href, text }) => {
  return (
    <List.Item className={styles.list_item} fz={18}>
      <Link href={href}>{text}</Link>
    </List.Item>
  );
};
