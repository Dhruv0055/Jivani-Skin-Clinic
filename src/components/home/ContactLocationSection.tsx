import React from "react";
import { clinicData } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Instagram,
  Clock,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export function ContactLocationSection() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
    clinicData.whatsappMessagePreset
  )}`;

  return (
    <section id="contact" className="py-10 sm:py-16 bg-warm-white border-t border-clinic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Our Clinic"
          title="Contact & Location"
          subtitle="Conveniently located at Yamuna Chowk, Mota Varachha, Surat with easy road connectivity and parking."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-4 xs:p-6 rounded-2xl border border-clinic-border shadow-xs space-y-4 xs:space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-mint-tint flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-deep uppercase tracking-wider">
                    Clinic Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-muted mt-0.5 leading-relaxed">
                    {clinicData.address}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    Landmark: {clinicData.landmark}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-mint-tint flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-deep uppercase tracking-wider">
                    Phone Numbers
                  </h4>
                  <a
                    href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs sm:text-sm text-slate-muted hover:text-primary transition-colors block mt-0.5"
                  >
                    {clinicData.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#128C7E] shrink-0">
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-transparent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-deep uppercase tracking-wider">
                    WhatsApp Chat
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-slate-muted hover:text-[#128C7E] transition-colors block mt-0.5"
                  >
                    Click to message clinic desk
                  </a>
                </div>
              </div>

              {/* Directions Button */}
              <div className="pt-2 border-t border-clinic-border">
                <a
                  href={clinicData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 xs:gap-2 py-2.5 xs:py-3 px-3 xs:px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-[11px] xs:text-xs font-semibold shadow-soft transition-all text-center"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span className="truncate">Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Instagram Social Banner */}
            <div className="p-3.5 xs:p-4 rounded-2xl bg-white border border-clinic-border shadow-xs flex items-center justify-between gap-2.5 xs:gap-3">
              <div className="flex items-center gap-2.5 xs:gap-3 min-w-0 flex-1">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0">
                  <Instagram className="w-4 h-4 xs:w-5 xs:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-slate-deep truncate">
                    {clinicData.instagramHandle}
                  </h4>
                  <p className="text-[10px] xs:text-[11px] text-slate-muted truncate">
                    Follow on Instagram for clinic updates
                  </p>
                </div>
              </div>

              <a
                href={clinicData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 xs:px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-deep hover:bg-primary transition-colors shrink-0"
              >
                Follow
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-clinic-border shadow-xs bg-white h-[380px] sm:h-[420px] relative">
              <iframe
                title="Jivani Skin Clinic Varachha Surat Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709425143!2d72.8222!3d21.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558e99994c502!2sVarachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating pill badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm border border-clinic-border text-xs flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-deep">{clinicData.clinicName}</span>
                <span className="text-slate-muted">• Varachha, Surat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
