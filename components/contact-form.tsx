"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, X, FileText, Image, Check } from "lucide-react";
import { toast } from "sonner";

interface FileWithPreview {
  file: File;
  id: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    diagnostic: "",
    gdprConsent: false,
    contactConsent: false,
  });
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  };

  const addFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      const validTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/jpg",
      ];
      return validTypes.includes(file.type);
    });

    const filesWithIds = validFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substring(7),
    }));

    setFiles((prev) => [...prev, ...filesWithIds]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) {
      return <Image className="w-4 h-4" />;
    }
    return <FileText className="w-4 h-4" />;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gdprConsent || !formData.contactConsent) {
      toast.error("Trebuie să accepți ambele consimțăminte pentru a continua.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      "Mulțumim! Documentele tale au fost trimise cu succes. Te vom contacta în cel mai scurt timp."
    );

    // Reset form
    setFormData({
      nume: "",
      prenume: "",
      email: "",
      telefon: "",
      diagnostic: "",
      gdprConsent: false,
      contactConsent: false,
    });
    setFiles([]);
    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-[var(--bg)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 text-balance">
            Formular A Doua Opinie Gratuită
          </h2>
          <p className="text-lg text-[var(--text)]/70">
            Completează formularul și echipa noastră te va contacta în cel mai
            scurt timp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nume"
                className="block text-sm font-medium text-[var(--text)] mb-2"
              >
                Nume *
              </label>
              <input
                type="text"
                id="nume"
                name="nume"
                required
                value={formData.nume}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all bg-[var(--bg)] text-[var(--text)]"
                placeholder="Popescu"
              />
            </div>
            <div>
              <label
                htmlFor="prenume"
                className="block text-sm font-medium text-[var(--text)] mb-2"
              >
                Prenume *
              </label>
              <input
                type="text"
                id="prenume"
                name="prenume"
                required
                value={formData.prenume}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all bg-[var(--bg)] text-[var(--text)]"
                placeholder="Ion"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text)] mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all bg-[var(--bg)] text-[var(--text)]"
                placeholder="email@exemplu.ro"
              />
            </div>
            <div>
              <label
                htmlFor="telefon"
                className="block text-sm font-medium text-[var(--text)] mb-2"
              >
                Telefon *
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all bg-[var(--bg)] text-[var(--text)]"
                placeholder="+40 7XX XXX XXX"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="diagnostic"
              className="block text-sm font-medium text-[var(--text)] mb-2"
            >
              Diagnostic / Simptome *
            </label>
            <textarea
              id="diagnostic"
              name="diagnostic"
              required
              rows={4}
              value={formData.diagnostic}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none bg-[var(--bg)] text-[var(--text)]"
              placeholder="Descrie pe scurt diagnosticul actual sau simptomele pentru care dorești o a doua opinie..."
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">
              Documente medicale
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                isDragging
                  ? "border-[var(--primary)] bg-[var(--primary)]/5"
                  : "border-gray-200 hover:border-[var(--primary)]/50"
              }`}
            >
              <input
                type="file"
                id="files"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
              />
              <label htmlFor="files" className="cursor-pointer">
                <Upload className="w-10 h-10 mx-auto mb-4 text-[var(--primary)]" />
                <p className="text-[var(--text)] mb-2">
                  Trage și lasă fișierele aici sau{" "}
                  <span className="text-[var(--primary)] font-medium">
                    click pentru a selecta
                  </span>
                </p>
                <p className="text-sm text-[var(--text)]/60">
                  Acceptăm: PDF, JPG, PNG (max 10MB per fișier)
                </p>
              </label>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[var(--primary)]">
                        {getFileIcon(f.file.type)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--text)] truncate max-w-[200px]">
                          {f.file.name}
                        </p>
                        <p className="text-xs text-[var(--text)]/60">
                          {(f.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-[var(--text)]/60" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GDPR Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="gdprConsent"
                checked={formData.gdprConsent}
                onChange={handleInputChange}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
              />
              <span className="text-sm text-[var(--text)]/80 leading-relaxed">
                Sunt de acord cu prelucrarea datelor mele personale și a
                documentelor medicale conform{" "}
                <a
                  href="/gdpr"
                  className="text-[var(--primary)] hover:underline"
                >
                  Politicii de Confidențialitate
                </a>{" "}
                *
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="contactConsent"
                checked={formData.contactConsent}
                onChange={handleInputChange}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
              />
              <span className="text-sm text-[var(--text)]/80 leading-relaxed">
                Sunt de acord să fiu contactat telefonic sau pe WhatsApp *
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Se trimite...
              </>
            ) : (
              <>
                <Check className="w-5 h-5" />
                Trimite pentru Evaluare Gratuită
              </>
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
