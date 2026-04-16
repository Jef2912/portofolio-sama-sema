import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    phone: "",
    eventType: "Yearbook",
    date: "",
    person: "",
    message: "Halo Samasema, kami ingin membuat project buku tahunan yang kreatif dengan kalian! Konsep yang ingin kami tanyakan adalah ...",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo Samasema! Kami tertarik untuk pembuatan Yearbook.
    
*Detail Kontak*
Nama Lengkap: ${formData.name}
Asal Sekolah: ${formData.school}
No. WA: ${formData.phone}

*Detail Event*
Tipe Event: ${formData.eventType}
Tanggal Pelaksanaan: ${formData.date}
Jumlah Siswa (Person): ${formData.person}

*Pesan/Konsep/Catatan Tambahan:*
${formData.message}`;

    const waNumber = "62895338381625";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  const inputStyle = {
    fontSize: "15px",
    color: "#0d0d0d", // changed from #c9c4b8
    background: "#ffffff",
    border: "1px solid #2a2820",
    borderRadius: "12px",
    padding: "14px 18px",
    width: "100%",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "13px",
    color: "#000000",
    fontWeight: 500,
    display: "block",
    marginBottom: "8px",
    letterSpacing: "0.04em",
  };

  return (
    <section id="contact" className="bg-[#FFD60A] pt-24 pb-28 relative overflow-hidden">
      {/* Top transition from Logos 3 (#FFD60A) */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#FFD60A] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:pt-16">

            <h2
              style={{
                fontSize: "clamp(34px, 4.5vw, 56px)",
                color: "#f5f0e8",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Let's create something{" "}
              <span style={{ fontStyle: "italic", color: "#1D4ED8" }}>unforgettable</span>
            </h2>
            <p
              style={{ fontSize: "16px", color: "#000000", lineHeight: 1.7 }}
              className="mt-6 mb-12"
            >
              Tell us about your event and we'll be in touch within 24 hours with a tailored proposal.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Location", value: "Lampung, Bandar Lampung & Way Halim" },
                { icon: Phone, label: "Phone", value: "+62895338381625" },
                { icon: Mail, label: "Email", value: "samasemaprojects.id" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffffff] border border-[#ffffff] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#1D4ED8]" />
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", color: "#363331ff", letterSpacing: "0.06em" }} className="uppercase">
                        {item.label}
                      </p>
                      <p style={{ fontSize: "15px", color: "#000000" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="relative lg:mt-16">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center p-16 rounded-3xl border border-[#ffffff]/20 bg-[#1D4ED8]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD60A] to-[#ffb800] flex items-center justify-center mb-6 text-4xl shadow-lg">
                  🎉
                </div>
                <h3 style={{ fontSize: "28px", color: "#ffffff", fontWeight: 600 }} className="mb-3">
                  We'll be in touch!
                </h3>
                <p style={{ fontSize: "16px", color: "#f8fafc", lineHeight: 1.7 }}>
                  Thanks for reaching out. A member of our team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl border border-[#ffffff] bg-[#ffffff] space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      className="focus:border-[#f5c97a]/50 transition-colors placeholder:text-[#3a3830]"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Asal Sekolah</label>
                    <input
                      name="school"
                      type="text"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Nama sekolah kamu"
                      required
                      style={inputStyle}
                      className="focus:border-[#f5c97a]/50 transition-colors placeholder:text-[#3a3830]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62..."
                      style={inputStyle}
                      className="focus:border-[#f5c97a]/50 transition-colors placeholder:text-[#3a3830]"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Event Type</label>
                    <input
                      name="eventType"
                      type="text"
                      value={formData.eventType}
                      readOnly
                      title="Auto-filled for Yearbook projects"
                      style={{ ...inputStyle, background: "#f0f0f0", color: "#000000", cursor: "not-allowed" }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Event Date</label>
                    <input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      style={inputStyle}
                      className="focus:border-[#f5c97a]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Estimated Person</label>
                    <input
                      name="person"
                      type="number"
                      value={formData.person}
                      onChange={handleChange}
                      placeholder="e.g. 150"
                      style={inputStyle}
                      className="focus:border-[#f5c97a]/50 transition-colors placeholder:text-[#3a3830]"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell Us More</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ ...inputStyle, resize: "none" }}
                    className="focus:border-[#f5c97a]/50 transition-colors placeholder:text-[#3a3830]"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#1D4ED8] hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ fontSize: "15px", color: "#0d0d0d", fontWeight: 600 }}
                >
                  Send Enquiry
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
