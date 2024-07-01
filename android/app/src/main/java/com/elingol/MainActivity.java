package com.elingol;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;

@Metadata(
        mv = {1, 8, 0},
        k = 1,
        d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u0005¢\u0006\u0002\u0010\u0002J\b\u0010\u0003\u001a\u00020\u0004H\u0014J\b\u0010\u0005\u001a\u00020\u0006H\u0014¨\u0006\u0007"},
        d2 = {"Lcom/elingol/MainActivity;", "Lcom/facebook/react/ReactActivity;", "()V", "createReactActivityDelegate", "Lcom/facebook/react/ReactActivityDelegate;", "getMainComponentName", "", "app_debug"}
)
public final class MainActivity extends ReactActivity {
    @NotNull
    protected String getMainComponentName() {
        return "Elingol";
    }

    @NotNull
    protected ReactActivityDelegate createReactActivityDelegate() {
        return (ReactActivityDelegate)(new DefaultReactActivityDelegate((ReactActivity)this, this.getMainComponentName(), DefaultNewArchitectureEntryPoint.getFabricEnabled()));
    }
}
