import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "../ui/Reveal";

const contactItems = [
  {
    id: 1,
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
  },
  {
    id: 2,
    icon: Phone,
    label: "Phone",
    value: "+91 00000 00000",
  },
  {
    id: 3,
    icon: MapPin,
    label: "Location",
    value: "India",
  },
];

const ContactInfo = () => {
  return (
    <Reveal>
      <div className="space-y-5">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-300/20
                hover:bg-white/[0.06]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};

export default ContactInfo;