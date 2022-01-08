import React from 'react';
import banner from 'assets/authBanner.png';
import logo from 'assets/logo.svg';

import SignupForm from '../../components/auth/SignupForm';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Signup = (props) => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="signup">
        <div className="grid grid-cols-2 min-h-screen">
          <div className="content col-span-2 lg:col-span-1">
            <div className="p-6 py-12 lg:p-24">
              <img className="w-48 mb-8" src={logo} alt="" />
              <h1 className="text-4xl font-black mb-4">
                {t('auth.login.title')}
              </h1>
              <h4 className="text-lg text-gray-400 font-bold">
                {t('auth.description')}{' '}
              </h4>
              <Link to="/login">{t('auth.login.alreadyMember')}</Link>
              {/* form */}
              <SignupForm className="my-6 w-full xl:w-2/3" />
            </div>
          </div>
          <div className="banner hidden lg:block lg:col-span-1">
            <img className="w-full h-full object-cover" src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
