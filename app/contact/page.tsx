"use client"
import { useState } from "react"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

const Contact = () => {
  const [radioGroupSelectedValue, setRadioGroupSelectedValue] = useState<
    string | null
  >(null)
  const [agreement, setAgreement] = useState(false)

  const radioGroupOptions = [
    {
      title: "Freelancer",
      description: "Select this option if you are a freelancer.",
      value: "freelancer",
    },
    {
      title: "Company",
      description: "Select this option if you are working for a company.",
      value: "company",
    },
  ]

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle submit
    console.log({
      radioGroupSelectedValue,
      agreement,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <Section withTopBorder withBottomBorder>
          <div className="pt-16 pb-24 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
            {/* Left / Visual */}
            <div className="lg:absolute lg:inset-0 lg:left-1/2">
              <Image
                src="/contact-illustration.png"
                alt="Contact illustration"
                width={800}
                height={600}
                className="w-full h-64 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>

            {/* Right / Form column */}
            <div className="px-6 lg:px-8">
              <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
                <div className="max-w-xl lg:text-balance">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground lg:text-balance">
                    Let’s start a conversation
                  </h1>
                  <p className="text-base mt-4 lg:text-balance text-muted-foreground">
                    Have a question, idea, or feedback? Our team is here to
                    listen and help you move forward. Reach out and let’s
                    connect.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="max-w-lg mx-auto mt-12">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="first-name"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        First name
                      </Label>
                      <div className="mt-1">
                        <Input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          required
                          aria-required
                          aria-describedby="first-name-error"
                          placeholder="Your first name"
                        />
                        <span
                          id="first-name-error"
                          className="hidden text-sm text-red-600"
                        >
                          Please enter your first name.
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="last-name"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        Last name
                      </Label>
                      <div className="mt-1">
                        <Input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          required
                          aria-required
                          aria-describedby="last-name-error"
                          placeholder="Your last name"
                        />
                        <span
                          id="last-name-error"
                          className="hidden text-sm text-red-600"
                        >
                          Please enter your last name.
                        </span>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        Company name
                      </Label>
                      <div className="mt-1">
                        <Input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          aria-describedby="company-error"
                          placeholder="Your company"
                        />
                        <span
                          id="company-error"
                          className="hidden text-sm text-red-600"
                        >
                          Please enter your company name.
                        </span>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="phone-number"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        Phone number
                      </Label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            aria-label="Country code"
                            className="h-full py-0 pl-4 bg-transparent border-0 rounded-md pr-9 text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm"
                          >
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="JP">Japan</option>
                          </select>
                        </div>
                        <Input
                          type="tel"
                          name="phone-number"
                          id="phone-number"
                          autoComplete="tel"
                          aria-describedby="phone-number-description"
                          placeholder="123-456-7890"
                          className="pl-24"
                        />
                        <p id="phone-number-description" className="sr-only">
                          Enter your phone number including the country code.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2"
                    role="radiogroup"
                    aria-labelledby="radio-group-label"
                  >
                    <span id="radio-group-label" className="sr-only">
                      Choose your work status
                    </span>

                    {radioGroupOptions.map((option) => (
                      <div key={option.value}>
                        <input
                          type="radio"
                          id={`radio-${option.value}`}
                          name="radio-group"
                          value={option.value}
                          checked={radioGroupSelectedValue === option.value}
                          onChange={() =>
                            setRadioGroupSelectedValue(option.value)
                          }
                          className="sr-only"
                          aria-describedby={`description-${option.value}`}
                        />
                        <label
                          htmlFor={`radio-${option.value}`}
                          className={`block shadow cursor-pointer bg-linear-180 outline outline-zinc-100 dark:outline-zinc-800 from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-xl transition-all duration-300 ease-in-out focus-within:ring-zinc-500 ${
                            radioGroupSelectedValue === option.value
                              ? "ring-zinc-500"
                              : ""
                          }`}
                        >
                          <div
                            className="flex flex-col justify-between h-full text-left rounded-lg"
                            tabIndex={-1}
                          >
                            <div className="flex items-center p-4 gap-3">
                              <div
                                className={`flex items-center justify-center bg-white rounded-full size-4 ring-1 dark:bg-zinc-900 ${
                                  radioGroupSelectedValue === option.value
                                    ? "ring-zinc-500"
                                    : "ring-zinc-300 dark:ring-zinc-700"
                                }`}
                                aria-hidden="true"
                              >
                                {radioGroupSelectedValue === option.value && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-circle-check-filled text-foreground dark:text-muted-foreground"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    ></path>
                                    <path
                                      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                      strokeWidth="0"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                              <span className="text-base font-medium text-foreground">
                                {option.title}
                              </span>
                            </div>
                            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
                              <span
                                className="text-sm font-medium text-muted-foreground"
                                id={`description-${option.value}`}
                              >
                                {option.description}
                              </span>
                            </div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <Button type="submit" className="w-full font-mono mt-4" size="lg">
                    Submit
                  </Button>

                  <div className="flex items-center mt-4">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      checked={agreement}
                      onChange={(e) => setAgreement(e.target.checked)}
                      className="rounded shadow size-4 border-input text-foreground focus:ring-primary"
                    />
                    <label
                      htmlFor="agreement"
                      className="block ml-3 text-sm text-muted-foreground"
                    >
                      You agree to our{" "}
                      <a
                        href="#_"
                        className="font-medium text-foreground hover:text-primary dark:hover:text-primary/80"
                      >
                        Terms of service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#_"
                        className="font-medium text-foreground hover:text-primary dark:hover:text-primary/80"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div className="text-center mt-4">
                    <Link
                      href="/"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      ← Back to home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Contact
