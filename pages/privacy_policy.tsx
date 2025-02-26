// eslint-disable-next-line react/no-unescaped-entities
import {Card, Grid, Typography, CardMedia, Box, CardContent, CardActions, List, ListItem} from '@mui/material';

import CircularIconWithText from '@/components/circular_icon_with_text';
import { REASONS_TO_CHOOSE } from '@/constants'

export default function PTS_PP() {
    return (
        <Grid container spacing={4} sx={{padding: '80px 15vw 0'}}>
            <Grid item xs={12}>
                <Typography variant='h3' sx={{
                    fontWeight: 800,
                    color: '#333',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    marginBottom: '20px',
                    paddingBottom: '5px',
                    textAlign: 'center'
                }}>Privacy Terms of Service and Privacy Policy</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Eddyease Privacy Policy
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Last updated: September 29, 2023
                </Typography>
                <Typography variant="body1" paragraph>
                    {'This Privacy Policy describes how Eddyease (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from eddyease.com (the "Site") or otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.'}
                </Typography>
                <Typography variant="body1" paragraph>
                    Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontWeight: 600}}>
                Changes to This Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                {'We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.'}
                </Typography>
                <Typography variant="body1" paragraph sx={{fontWeight: 600}}>
                How We Collect and Use Your Personal Information
                </Typography>
                <Typography variant="body1" paragraph>
                {'To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.'}
                </Typography>
                <Typography variant="body1" paragraph>
                {'In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.'}
                </Typography>
                <Typography variant="body1" paragraph sx={{fontWeight: 600}}>
                What Personal Information We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                {'The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.'}
                </Typography>
                <Typography variant="body1" paragraph sx={{fontWeight: 600}}>
                Information We Collect Directly from You
                </Typography>
                <Typography variant="body1" paragraph>
                {'Information that you directly submit to us through our Services may include:'}
                </Typography>
                <List>
                    <ListItem>
                    Basic contact details including your name, address, phone number, email.
                    </ListItem>
                    <ListItem>
                    Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.
                    </ListItem>
                    <ListItem>
                    Account information including your username, password, security questions.
                    </ListItem>
                    <ListItem>
                    Shopping information including the items you view, put in your cart or add to your wishlist.
                    </ListItem>
                    <ListItem>
                    Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.
                    </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                {'Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.'}
                </Typography>
                <Typography variant="body1" paragraph sx={{fontWeight: 600}}>
                Information We Collect through Cookies
                </Typography>
                <Typography variant="body1" paragraph>
                {'We also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.'}
                </Typography>
                <Typography variant="body1" paragraph sx={{fontWeight: 600}}>
                Information We Obtain from Third Parties
                </Typography>
                <Typography variant="body1" paragraph>
                {'Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:'}
                </Typography>
                <List>
                    <ListItem>
                    Companies who support our Site and Services, such as Shopify.
                    </ListItem>
                    <ListItem>
                    Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.
                    </ListItem>
                    <ListItem>
                    Account information including your username, password, security questions.
                    </ListItem>
                    <ListItem>
                    When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.
                    </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                {"Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party's policies or practices. For more information, see the section below, Third Party Websites and Links."}
                </Typography>
            </Grid>
        </Grid>
    )
}