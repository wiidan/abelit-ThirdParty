FROM python

MAINTAINER Abelit <ychenid@live.com>

# Upgrade pip
ARG PIP_UPGRADE=true
ENV PIP_UPGRADE ${PIP_UPGRADE}
RUN if [ ${PIP_UPGRADE} = true ]; then \
    # run the install
    pip install --upgrade pip --timeout 600 -i http://pypi.mirrors.ustc.edu.cn/simple --trusted-host pypi.mirrors.ustc.edu.cn \
;fi

# Install flask
ARG INSTALL_FLASK=true
ENV INSTALL_FLASK ${INSTALL_FLASK}
RUN if [ ${INSTALL_FLASK} = true ]; then \
    # run the install
    pip install --timeout 600 -i http://pypi.mirrors.ustc.edu.cn/simple --trusted-host pypi.mirrors.ustc.edu.cn flask \
;fi

RUN mkdir -p /app/feedback
WORKDIR /app/feedback
