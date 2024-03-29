from setuptools import setup
from setuptools.command.build import build


# Override build command
class BuildCommand(build):
    def initialize_options(self):
        build.initialize_options(self)
        self.build_base = "/tmp"


setup(
    name="cb_django_docusign",
    version="0.1",
    packages=["docusign"],
    install_requires=['docusign-esign == 3.19.0', "attrdict"],
    cmdclass={"build": BuildCommand},
)
