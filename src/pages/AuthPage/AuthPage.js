
import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <div className={styles.formsContainer}>
          <LoginForm setUser={setUser} />
          <SignUpForm setUser={setUser} />
        </div>
        <h2 className={styles.discount}> ***30% discount for General Assembly students!!!</h2>
      </div>      
    </main>
  );
}