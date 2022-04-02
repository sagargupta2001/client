import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useFormContext} from "react-hook-form";
import AppTextInput from "../../App/components/AppTextInput";
import AppCheckbox from "../../App/components/AppCheckbox";

export default function AddressForm() {
    const {control} = useFormContext();
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <AppTextInput control={control} name='fullName' label='Full Name' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput control={control} name='address1' label='Address 1' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput control={control} name='address2' label='Address 2' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='city' label='City' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='state' label='State' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='zip' label='Zipcode' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='country' label='Country' />
                </Grid>
                <Grid item xs={12}>
                    <AppCheckbox
                        label='Save this as the default address'
                        name='saveAddress'
                        control={control} />
                </Grid>
            </Grid>
        </>
    );
}