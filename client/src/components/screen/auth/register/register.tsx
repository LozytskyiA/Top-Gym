import React, { FC } from 'react';
import { RegistrateWrapper } from './register.styles';
import { RegistrationForm } from '../../../registration-form';

export const UserRegistration: FC = () => {
  return (
    <RegistrateWrapper>
      <h1>REGISTRATION</h1>
      <RegistrationForm />
    </RegistrateWrapper>
  );
}
