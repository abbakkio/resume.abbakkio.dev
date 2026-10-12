import React from 'react'

export const QuantumCallout: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#f0ede8]/70 dark:bg-[#141414] border border-[#e2ddd5] dark:border-[#222222] mb-12 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-mono-custom text-[#ff5c00] text-xs">
          // Specialization Note
        </span>
        <span className="text-neutral-300 dark:text-neutral-700">•</span>
        <span className="font-mono-custom text-neutral-500 text-xs">
          Terms 05 – 08
        </span>
      </div>
      <p>
        <strong className="text-neutral-900 dark:text-white font-medium">Why Quantum?</strong> University electives in <span className="text-neutral-900 dark:text-neutral-200">Fluid Mechanics, Quantum Mechanics, Quantum Computing,</span> and <span className="text-neutral-900 dark:text-neutral-200">Quantum Programming</span> provide deep operator theory and linear algebra in Hilbert spaces. This creates a distinct foundation for <strong className="text-neutral-900 dark:text-neutral-200">Quantum Machine Learning (PennyLane / Qiskit)</strong> and <strong className="text-neutral-900 dark:text-neutral-200">Physics-Informed Neural Networks (PINNs)</strong>.
      </p>
    </div>
  )
}
