# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "boarding_pass"
  s.version = "0.1.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Michael LaCroix", "James LaCroix"]
  s.date = "2013-09-11"
  s.description = "Boarding Pass provides a set of tools and defaults to quickly start web project front-ends."
  s.email = ["info@lacroixdesign.net"]
  s.homepage = "https://github.com/lacroixdesign/boarding_pass"
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14"
  s.summary = "Boarding Pass provides a set of tools and defaults to quickly start web project front-ends. Includes Sass, Bourbon and Neat."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<sass>, [">= 3.2"])
      s.add_runtime_dependency(%q<bourbon>, [">= 3.1"])
      s.add_runtime_dependency(%q<neat>, [">= 1.2"])
    else
      s.add_dependency(%q<sass>, [">= 3.2"])
      s.add_dependency(%q<bourbon>, [">= 3.1"])
      s.add_dependency(%q<neat>, [">= 1.2"])
    end
  else
    s.add_dependency(%q<sass>, [">= 3.2"])
    s.add_dependency(%q<bourbon>, [">= 3.1"])
    s.add_dependency(%q<neat>, [">= 1.2"])
  end
end
