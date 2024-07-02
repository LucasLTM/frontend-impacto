import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { IoClose } from 'react-icons/io5';

import { NavLink } from 'react-router-dom'

interface LoginRedirectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginRedirectModal: React.FC<LoginRedirectModalProps> = ({ open, onOpenChange }) => {
  const { t } = useTranslation();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-[99] inset-0 bg-black bg-opacity-50" />
        <Dialog.Content
          className={cn(
            "fixed z-[99] bottom-0 left-0 right-0 m-auto max-h-[50%] w-full max-w rounded-t-3xl bg-white p-10 shadow-lg transition-transform duration-300",
            open ? "translate-y-0" : "translate-y-full"
          )}
          style={{ transitionProperty: 'transform' }}
        >
          <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-gray-600">
                <IoClose size={30} />
              </button>
            </Dialog.Close>
          <Dialog.Title className="text-lg font-semibold text-center">🌟 Junte-se à Nossa Comunidade de Impacto! 🌟</Dialog.Title>
          
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Você sabia que pode fazer a diferença na vida de muitas pessoas? Ao se cadastrar na nossa plataforma, você terá acesso a oportunidades de doar dinheiro ou fazer trabalho voluntário com ONGs confiáveis e seguras.
            <br /><br />
            💖 Faça parte dessa corrente do bem e ajude a transformar vidas!
          </Dialog.Description>
          <div className="mt-4 flex justify-center space-x-10">
            <NavLink 
              to="/register"
              className="rounded-md bg-white px-16 py-2 text-sm font-medium text-[#004AAD] border-2 border-[#004AAD] hover:bg-[#004AAD] hover:text-white"
            >
              {t('cadastrar-se')}
            </NavLink>

            <NavLink 
              to="/login" 
              className="rounded-md bg-[#004AAD] px-16 py-2 text-sm font-medium text-white border-2 border-[#004AAD]"
            >
              {t('Login')}
            </NavLink>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginRedirectModal;
