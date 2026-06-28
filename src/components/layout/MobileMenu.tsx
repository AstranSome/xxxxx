"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-espresso"
        >
          <div className="flex h-full flex-col px-8 py-10">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="font-sans text-sm uppercase tracking-widest text-ivory/70"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col justify-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-4xl text-ivory transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/reservations"
                  onClick={onClose}
                  className="btn-primary inline-flex"
                >
                  <span>Reserve a Table</span>
                </Link>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
